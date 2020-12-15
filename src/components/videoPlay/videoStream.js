`use strict`
const Stream = require('node-rtsp-stream')

// 码流配置
const config = [
  { 'name': 'front', 'url': 'rtsp://admin:haikang12345@10.7.5.150:554/h264/ch1/sub/av_stream', 'port': 9530, 'currentMilliecond': 0 },
  { 'name': 'normal', 'url': 'rtsp://admin:haikang12345@10.7.5.151:554/h264/ch1/sub/av_stream', 'port': 9531, 'currentMilliecond': 0 }
  // { 'name': 'spectroscopy', 'url': 'rtsp://admin:haikang12345@10.7.5.151:554/h264/ch2/sub/av_stream', 'port': 9532, 'currentMilliecond': 0 }
]

let video01=config[0];


  // 返回视频流
const getStream = (o=video01) => {
  o.currentMilliecond = getCurrentTime()
  return new Stream({
    name: o.name,
    streamUrl: o.url,
    wsPort: o.port,
    ffmpegOptions: { // options ffmpeg flags
      '-stats': '', // an option with no neccessary value uses a blank string
      '-r': 30, // options with required values specify the value after the key
      '-s': '640x360',
      // '-codec': 'copy',
      '-b': '1.5M'
    }
  })
}
