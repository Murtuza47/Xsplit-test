import { connect, ConnectOptions } from "mongoose";
import dayjs from 'dayjs';
import { MONGODB_URI } from "..";

const mongoDB = connect(MONGODB_URI || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions)
  .then(() => console.log(`[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] [INFO] MongoDB connected`))
  .catch((error) => console.log(error))

export default mongoDB