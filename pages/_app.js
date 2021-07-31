import '../styles/globals.css'
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import { useRouter } from 'next/router';


const publicPages = ['/signin'];


function MyApp({ Component, pageProps }) {
  const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;
  const router = useRouter();
  
  return (
    <ClerkProvider frontendApi={clerkFrontendApi} navigate={to=>router.push(to)}>
      {publicPages.includes(router.pathname)?<Component {...pageProps} />:
      <>
      <SignedIn>
          <Component {...pageProps} />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn path="/signin" />
        </SignedOut>
        </>
        }
    </ClerkProvider>
   )
}

export default MyApp
