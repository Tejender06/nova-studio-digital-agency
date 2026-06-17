export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
}