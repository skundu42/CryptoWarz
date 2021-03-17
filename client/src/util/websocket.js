  
const WEBHOOK_URL = 'mighty-escarpment-41139.herokuapp.com/'

const initWebsocket = (cb) => {
  console.log('Websocket inited')
//   window.ws = new WebSocket(`wss://${WEBHOOK_URL}`)
  window.ws = new WebSocket(`wss://${WEBHOOK_URL}`)
  const ws = window.ws
  
  ws.onopen = () => {
    ws.send(JSON.stringify({ message: 'Someone joined' }))
    console.log('Websocket connected')
    cb()
  }

  return ws
}

export default initWebsocket