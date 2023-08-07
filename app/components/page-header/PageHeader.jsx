import cx from 'classnames';
import React from 'react';

import iconLogo from '~/assets/images/logo-icon.png';
import logo from '~/assets/images/logo.png';

function Hamburger() {
  return (
    <button className="w-[40px] p-1 text-white md:hidden">
      <svg viewBox="0 0 100 80">
        <rect fill="currentColor" width="100" height="10" rx="10"></rect>
        <rect fill="currentColor" y="30" width="100" height="10" rx="5"></rect>
        <rect fill="currentColor" y="60" width="100" height="10" rx="5"></rect>
      </svg>
    </button>
  );
}

function PageHeader(props) {
  return (
    <header
      className={cx(
        'relative flex items-center justify-between p-4',
        'bg-[radial-gradient(circle_at_center,#62cbc9_59%,#6dcff6_100%)]'
      )}
    >
      <div>
        <a href="/">
          <img className="w-[50px] md:hidden" src={iconLogo} alt="" />
          <img className="hidden md:inline-block" src={logo} alt="" />
        </a>
      </div>
      <div>
        <ul
          className={cx(
            'absolute left-0 right-0 top-full z-10',
            'divide-y divide-black/[.05] bg-secondary p-4 text-white'
          )}
        >
          <li className="block">
            <a className="inline-block px-4 py-2.5" href="/about">
              About
            </a>
          </li>
          <li className="block">
            <a className="inline-block px-4 py-2.5" href="/free-lesson">
              Free Resources
            </a>
          </li>
          <li className="block">
            <a className="inline-block px-4 py-2.5" href="/curriculum">
              Curriculum
            </a>
          </li>
          <li className="block">
            <a className="inline-block px-4 py-2.5" href="/pricing">
              Pricing
            </a>
          </li>
          <li className="block">
            <a className="inline-block px-4 py-2.5" href="/iteachchurch-login">
              Sign In
            </a>
          </li>
        </ul>
        <Hamburger />
      </div>
    </header>
  );
}

export default PageHeader;
