// layout
import RootLayout from '@/layouts/RootLayout'

// page
import HomePage from '@/pages/HomePage'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    }
])

export default router