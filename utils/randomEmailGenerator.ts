import { v4 as uuidv4 } from 'uuid';

export default function  generateRandomEmail(domain: string = "example.com"): string {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let email = "";
  
    for (let i = 0; i < 10; i++) {
      email += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    email += `@${domain}`;
    return email;
  }
