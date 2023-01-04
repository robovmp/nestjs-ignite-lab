import { Notification, NotificationProps } from '@app/entities/notification';
import { Content } from '@app/entities/notification.content';

type Override = Partial<NotificationProps>;

export function MakeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'recipient-1',
    ...override,
  });
}
