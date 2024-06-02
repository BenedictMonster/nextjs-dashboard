import { lusitana } from '@/src/app/ui/fonts';
import { Metadata } from 'next';
import Notification from '@/src/app/ui/websocket/notifications';

export const metadata: Metadata = {
  title: 'Websocket Example',
};

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Websocket Example</h1>
      </div>
      <div>
        <Notification />
      </div>
    </div>
  );
}
