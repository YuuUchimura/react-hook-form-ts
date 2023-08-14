// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [formData, setFormData] = useState<{ email: string; password: string }>(
//     { email: "", password: "" }
//   );

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   console.log("再レンダリング");

//   return (
//     <div className="App">
//       <h1>ログイン</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">パスワード</label>
//           <input
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             type="password"
//           />
//         </div>
//         <div>
//           <button type="submit">ログイン</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;

// import { useRef } from "react";
// import "./App.css";

// function App() {
//   const emailRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log({
//       emai: emailRef.current?.value,
//       password: passwordRef.current?.value,
//     });
//   };
//   console.log("再レンダリング");

//   return (
//     <div className="App">
//       <h1>ログイン</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input id="email" name="email" ref={emailRef} />
//         </div>
//         <div>
//           <label htmlFor="password">パスワード</label>
//           <input
//             id="password"
//             name="password"
//             ref={passwordRef}
//             type="password"
//           />
//         </div>

//         <div>
//           <button type="submit">ログイン</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;

// import "./App.css";

// function App() {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const target = e.target as any;
//     console.log({
//       email: target.email.value,
//       password: target.password.value,
//     });
//   };

//   console.log("再レンダリング");
//   return (
//     <div className="App">
//       <h1>ログイン</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input type="text" id="email" name="email" />
//         </div>
//         <div>
//           <label htmlFor="password">パスワード</label>
//           <input id="password" name="password" type="password" />
//         </div>
//         <div>
//           <button type="submit">ログイン</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import { useForm } from "react-hook-form";

// type FormData = {
//   email: string;
//   password: string;
// };

// function App() {
//   const { register, handleSubmit } = useForm<FormData>();

//   const onSubmit = handleSubmit((data) => console.log(data));
//   console.log("再レンダリング");
//   return (
//     <div className="App">
//       <h1>ログイン</h1>
//       <form onSubmit={onSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input id="email" {...register("email")} />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input id="password" {...register("password")} type="password" />
//         </div>
//         <button type="submit">ログイン</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import { useRef, useState } from "react";
import "./App.css";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

function App() {
  const { register, handleSubmit } = useForm<FormData>();
  const { name, ref, onChange, onBlur } = register("email");

  const [state, setState] = useState<FormData>();
  const email = useRef("");
  let states: FormData = { email: "", password: "" };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setState(data);
    console.log({ states });
    console.log({ email });
    states = { email: data.email, password: data.password };
    email.current = data.email;
    console.log({ state });
    console.log({ states });
    console.log({ email: email.current });
    console.log(data);
  };
  console.log("再レンダリング");
  return (
    <div className="App">
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" {...register("password")} type="password" />
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}

export default App;
