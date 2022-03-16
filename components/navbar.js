import Link from 'next/link'

function Navbar() {
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth</a>
      </h1>
      <ul className={`main-nav loaded`}>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/dashboard'>
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
        <li>
            <Link method="POST" href="/api/auth/signin">
                <a>Sign In</a>
            </Link>
        </li>
        {/* {!loading && !session && (
          <li>
            <Link href='/api/auth/signin'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signIn('github')
                }}>
                Sign In
              </a>
            </Link>
          </li>
        )} */}
        {/* {session && (
          <li>
            <Link href='/api/auth/signout'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signOut()
                }}>
                Sign Out
              </a>
            </Link>
          </li>
        )} */}
      </ul>
    </nav>
  )
}

export default Navbar