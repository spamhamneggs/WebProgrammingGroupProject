import { useState } from 'react';

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form method="POST" action="/login">
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}
