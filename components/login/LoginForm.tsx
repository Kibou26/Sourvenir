import React, { useState } from 'react';
import styles from '../../components/LoginForm.module.css'; // Import the CSS module
async function authenticateUser(username: string, password: string) {
  // Replace with your authentication logic
  // This is just a mockup
  if (username === 'test' && password === 'password') {
    return { success: true };
  } else {
    return { success: false };
  }
}

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Your authentication logic here
      const response = await authenticateUser(username, password);

      // Check if the authentication was successful
      if (response.success) {
        // Redirect the user or update the UI accordingly
        window.location.href = '/dashboard'; // Redirect to the dashboard, for example
      } else {
        // Handle unsuccessful authentication
        // Display a user-friendly error message
        setErrorMsg('Incorrect username or password. Please try again.');
      }
    } catch (error) {
      // Handle and display the error message to the user
      console.error('Authentication error:', error);
      setErrorMsg('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div>
      <h1>TÀI KHOẢN KHÁCH HÀNG ĐĂNG NHẬP</h1>
      <form className={styles.form} onSubmit={handleLogin}>
  <label>
    Tên tài khoản hoặc địa chỉ email *
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
    />
  </label>
  <label>
    Mật khẩu *
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </label>
  <label>
    <input
      type="checkbox"
      checked={rememberMe}
      onChange={(e) => setRememberMe(e.target.checked)}
    />
    Ghi nhớ mật khẩu
  </label>
  <button type="submit">ĐĂNG NHẬP</button>
</form>
<p>ĐĂNG KÝ TÀI KHOẢN</p>

      {/* Display error message */}
      {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
}

export default LoginForm;
