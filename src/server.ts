import 'dotenv/config'
import { app } from './app'
const port = process.env.port || 3002

app.listen(port, () => console.log(`Server is running on PORT ${port}`))