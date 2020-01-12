self.addEventListener('push', event => {
  const data = event.data.json()
  const options = {
    body: data.body,
    icon: './logo192.png'
  }
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
})

self.addEventListener('notificationclick', async e => {
  const url = await 'https://donbassoperatable.web.app'
  const notifi = await e.notification
  const primaryKey = await notifi.data.primaryKey
  const action = await e.action
  if (action === 'close') {
    notifi.close()
  } else {
    clients.openWindow(url)
    notifi.close()
  }
	//e.notification.close();
	
	//const clientList = await clients.matchAll();
	/*for (var i = 0; i < clientList.length; i++) {
		var client = clientList[i];
		if (client.url == '' && 'focus' in client) {
			return await client.focus();
		}
	}*/
	return await clients.openWindow(url);
});