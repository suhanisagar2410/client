// API service for email communication

interface EmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Send email through backend API
 * @param data - Email form data
 * @returns Promise with API response
 */
export const sendEmail = async (data: EmailPayload): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_URL}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
