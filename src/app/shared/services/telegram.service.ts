import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private botToken = environment.telegramBotToken;
  private chatId = environment.telegramChatId;
  private apiUrl = `https://api.telegram.org/bot${this.botToken}/sendMessage`;

  constructor(private http: HttpClient) {}

  sendOrderNotification(orderDetails: string): Observable<any> {
    const message = `📦 Нове замовлення!\n${orderDetails}`;
    const payload = {
      chat_id: this.chatId,
      text: message,
      parse_mode: 'Markdown',
    };
    return this.http.post(this.apiUrl, payload);
  }
}
