import { Notification } from '@app/entities/notification';

export class NotificationView {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content,
      category: notification.recipientId,
    };
  }
}
