import HomePage from '@/pages/HomePage'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    }
])

export default router