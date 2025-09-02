import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface NetworkNode {
  x: number;
  y: number;
  type: 'user' | 'server' | 'endpoint';
  label?: string;
  ip?: string;
  threat?: boolean;
}

@Component({
  selector: 'asset-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asset-flow.component.html',
  styleUrls: ['./asset-flow.component.scss'],
})
export class AssetFlowComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasRef', { static: false })
  canvasRef!: ElementRef<any>;

  private ctx: any;
  private resizeObserver: any;

  private nodes: { [key: string]: NetworkNode } = {
    user: { x: 120, y: 200, type: 'user' },
    server1: { x: 280, y: 200, type: 'server', label: 'Loremipsu' },
    server2: { x: 450, y: 200, type: 'server', label: 'Loremipsu' },
    endpoint1: {
      x: 700,
      y: 120,
      type: 'endpoint',
      label: 'Loremipsumdolorsit',
      ip: '192.168.1.1',
      threat: true,
    },
    endpoint2: {
      x: 700,
      y: 280,
      type: 'endpoint',
      label: 'Loremipsumdolorsit002',
      ip: '192.168.1.2',
      threat: true,
    },
  };

  ngAfterViewInit(): void {
    this.initializeCanvas();
    this.setupResizeObserver();
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.resizeCanvas();
  }

  private initializeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.resizeCanvas();
  }

  private setupResizeObserver(): void {
    this.resizeObserver = new (window as any).ResizeObserver(() => {
      this.resizeCanvas();
    });
    this.resizeObserver.observe(this.canvasRef.nativeElement.parentElement);
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * (window as any).devicePixelRatio;
    canvas.height = rect.height * (window as any).devicePixelRatio;

    this.ctx.scale(
      (window as any).devicePixelRatio,
      (window as any).devicePixelRatio
    );

    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';

    this.drawNetwork();
  }

  private drawNetwork(): void {
    const canvas = this.canvasRef.nativeElement;
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    // Clear canvas
    this.ctx.clearRect(0, 0, width, height);

    // Draw connections
    this.drawConnections();

    // Draw nodes
    Object.values(this.nodes).forEach((node) => {
      this.drawNode(node);
    });
  }

  private drawConnections(): void {
    this.ctx.strokeStyle = '#dee2e6';
    this.ctx.lineWidth = 2;

    // Define connections
    const connections = [
      { from: this.nodes['user'], to: this.nodes['server1'] },
      { from: this.nodes['server1'], to: this.nodes['server2'] },
      { from: this.nodes['server2'], to: this.nodes['endpoint1'] },
      { from: this.nodes['server2'], to: this.nodes['endpoint2'] },
    ];

    connections.forEach((conn) => {
      this.drawLine(conn.from, conn.to);
    });
  }

  private drawLine(from: NetworkNode, to: NetworkNode): void {
    // Draw main line
    this.ctx.beginPath();
    this.ctx.moveTo(from.x, from.y);
    this.ctx.lineTo(to.x, to.y);
    this.ctx.stroke();

    // Draw arrow
    const angle = Math.atan2(to.y - from.y, to.x - from.x);
    const arrowX = to.x - 25 * Math.cos(angle);
    const arrowY = to.y - 25 * Math.sin(angle);

    this.ctx.beginPath();
    this.ctx.moveTo(arrowX, arrowY);
    this.ctx.lineTo(
      arrowX - 8 * Math.cos(angle - Math.PI / 6),
      arrowY - 8 * Math.sin(angle - Math.PI / 6)
    );
    this.ctx.moveTo(arrowX, arrowY);
    this.ctx.lineTo(
      arrowX - 8 * Math.cos(angle + Math.PI / 6),
      arrowY - 8 * Math.sin(angle + Math.PI / 6)
    );
    this.ctx.stroke();
  }

  private drawNode(node: NetworkNode): void {
    switch (node.type) {
      case 'user':
        this.drawUserNode(node);
        break;
      case 'server':
        this.drawServerNode(node);
        break;
      case 'endpoint':
        this.drawEndpointNode(node);
        break;
    }
  }

  private drawUserNode(node: NetworkNode): void {
    // Background circle
    this.ctx.fillStyle = '#e3f2fd';
    this.ctx.beginPath();
    this.ctx.arc(node.x, node.y, 25, 0, 2 * Math.PI);
    this.ctx.fill();

    // User icon
    this.ctx.fillStyle = '#7c4dff';
    this.ctx.beginPath();
    this.ctx.arc(node.x, node.y - 5, 8, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.fillRect(node.x - 8, node.y + 5, 16, 10);

    // Red security mask
    this.ctx.fillStyle = '#dc3545';
    this.ctx.beginPath();
    this.ctx.arc(node.x - 15, node.y + 15, 10, 0, 2 * Math.PI);
    this.ctx.fill();

    // Label
    this.ctx.fillStyle = '#6c757d';
    this.ctx.font = '14px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Loremipsumm', node.x, node.y + 45);
  }

  private drawServerNode(node: NetworkNode): void {
    // Background circle
    this.ctx.fillStyle = '#e3f2fd';
    this.ctx.beginPath();
    this.ctx.arc(node.x, node.y, 25, 0, 2 * Math.PI);
    this.ctx.fill();

    // Server icon
    this.ctx.fillStyle = '#2196f3';
    this.ctx.fillRect(node.x - 12, node.y - 10, 24, 6);
    this.ctx.fillRect(node.x - 12, node.y - 2, 24, 6);
    this.ctx.fillRect(node.x - 12, node.y + 6, 24, 6);

    // Label
    if (node.label) {
      this.ctx.fillStyle = '#6c757d';
      this.ctx.font = '14px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(node.label, node.x, node.y + 45);
    }
  }

  private drawEndpointNode(node: NetworkNode): void {
    // Background circle
    this.ctx.fillStyle = '#e3f2fd';
    this.ctx.beginPath();
    this.ctx.arc(node.x, node.y, 25, 0, 2 * Math.PI);
    this.ctx.fill();

    // Server icon
    this.ctx.fillStyle = '#2196f3';
    this.ctx.fillRect(node.x - 12, node.y - 10, 24, 6);
    this.ctx.fillRect(node.x - 12, node.y - 2, 24, 6);
    this.ctx.fillRect(node.x - 12, node.y + 6, 24, 6);

    // Threat indicator
    if (node.threat) {
      this.ctx.fillStyle = '#dc3545';
      this.ctx.beginPath();
      this.ctx.arc(node.x + 20, node.y - 20, 12, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.fillStyle = 'white';
      this.ctx.font = '16px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('!', node.x + 20, node.y - 15);
    }

    // Label and IP
    if (node.label || node.ip) {
      this.ctx.fillStyle = '#6c757d';
      this.ctx.font = '12px Arial';
      this.ctx.textAlign = 'left';

      if (node.label) {
        this.ctx.fillText(node.label, node.x + 35, node.y - 5);
      }
      if (node.ip) {
        this.ctx.fillText(node.ip, node.x + 35, node.y + 10);
      }
    }
  }

  public updateNode(nodeId: string, updates: Partial<NetworkNode>): void {
    if (this.nodes[nodeId]) {
      this.nodes[nodeId] = { ...this.nodes[nodeId], ...updates };
      this.drawNetwork();
    }
  }

  public addNode(nodeId: string, node: NetworkNode): void {
    this.nodes[nodeId] = node;
    this.drawNetwork();
  }

  public removeNode(nodeId: string): void {
    delete this.nodes[nodeId];
    this.drawNetwork();
  }
}
