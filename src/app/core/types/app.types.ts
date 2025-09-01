import {
  SeverityLevel,
  VulnerabilityStatus,
  RemediationStatus,
} from '../constants/app.constants';

// API Response types
export type ApiResponse<T> = {
  data: T;
  message: string;
  success: boolean;
};

export type PaginatedResponse<T> = {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

// User types
export type User = {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type UserRole = 'admin' | 'user' | 'moderator';

// Security types
export type Vulnerability = {
  id: string;
  title: string;
  description: string;
  severity: SeverityLevel;
  status: VulnerabilityStatus;
  discoveredAt: Date;
  resolvedAt?: Date;
  affectedSystems: string[];
  remediationSteps: string[];
};

export type RiskAssessment = {
  id: string;
  overallScore: number;
  criticalIssues: number;
  highIssues: number;
  mediumIssues: number;
  lowIssues: number;
  lastUpdated: Date;
  recommendations: string[];
};

export type Remediation = {
  id: string;
  title: string;
  description: string;
  category: RemediationCategory;
  priority: Priority;
  status: RemediationStatus;
  assignedTo?: string;
  dueDate?: Date;
  completedAt?: Date;
};

export type RemediationCategory = 'prevention' | 'detection' | 'response';
export type Priority = 'low' | 'medium' | 'high' | 'critical';

// Form types
export type FormField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea';
  required: boolean;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  validation?: ValidationRule[];
};

export type ValidationRule = {
  type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'custom';
  value?: string | number;
  message: string;
};

// UI Component types
export type TableColumn<T> = {
  key: keyof T;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  render?: (value: T[keyof T], row: T) => string;
};

export type SortDirection = 'asc' | 'desc';

export type FilterOption = {
  value: string;
  label: string;
  count?: number;
};

// Navigation types
export type NavigationItem = {
  label: string;
  route: string;
  icon?: string;
  children?: NavigationItem[];
  permissions?: string[];
};

// Notification types
export type Notification = {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
};

// Generic types with T prefix as per guidelines
export type TData = unknown;
export type TResponse = ApiResponse<TData>;
export type TTableData = Record<string, unknown>;
export type TFormData = Record<string, unknown>;
export type TFilterData = Record<string, unknown>;
