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

// import { useRef, useState } from "react";
// import "./App.css";
// import { SubmitHandler, useForm } from "react-hook-form";

// type FormData = {
//   email: string;
//   password: string;
// };

// function App() {
//   const { register, handleSubmit } = useForm<FormData>();

//   const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

//   console.log("再レンダリング");
//   return (
//     <div className="App">
//       <h1>ログイン</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input id="email" {...register("email", { required: true })} />
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

// import { useEffect } from "react";
// import "./App.css";
// import { useForm } from "react-hook-form";

// type FormData = {
//   email: string;
//   password: string;
// };

// function App() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: {
//       isDirty,
//       dirtyFields,
//       errors,
//       touchedFields,
//       isValid,
//       submitCount,
//       isSubmitted,
//       isSubmitting,
//       isSubmitSuccessful,
//     },
//     trigger,
//   } = useForm<FormData>({
//     defaultValues: { email: "", password: "" },
//     criteriaMode: "all",
//   });
//   console.log(submitCount);

//   const onSubmit = handleSubmit(async (data) => {
//     console.log(data);
//     reset(
//       {
//         email: "",
//         password: "",
//       },
//       {
//         keepSubmitCount: false,
//         keepIsSubmitted: false,
//         keepTouched: true,
//       }
//     );
//   });

//   const handleReset = () => {
//     reset({
//       email: "",
//       password: "",
//     });
//   };

//   useEffect(() => {
//     reset(
//       {
//         email: "",
//         password: "",
//       },
//       {
//         keepSubmitCount: true,
//         keepIsSubmitted: true,
//         keepTouched: true,
//       }
//     );
//   }, [isSubmitSuccessful]);

//   return (
//     <div className="App">
//       <h1>ログイン</h1>
//       <form onSubmit={onSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input id="email" {...register("email", { required: true })} />
//           {errors.email && <div>入力が必須の項目です</div>}
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             {...register("password", {
//               required: {
//                 value: true,
//                 message: "入力が必須の項目です。",
//               },
//               pattern: {
//                 value: /^[A-Za-z]+$/,
//                 message: "アルファベットのみ入力してください。",
//               },
//               minLength: {
//                 value: 8,
//                 message: "8文字以上入力してください。",
//               },
//             })}
//             type="password"
//           />
//           {errors.password?.types?.required && (
//             <div>{errors.password.types.required}</div>
//           )}
//           {errors.password?.types?.pattern && (
//             <div>{errors.password.types.pattern}</div>
//           )}
//           {errors.password?.types?.minLength && (
//             <div>8文字以上入力してください。</div>
//           )}
//         </div>
//         <div>isValid : {JSON.stringify(isValid)}</div>
//         <div>isDirty : {JSON.stringify(isDirty)}</div>
//         <div>submitCount : {JSON.stringify(submitCount)}</div>
//         <div>isSubmitted : {JSON.stringify(isSubmitted)}</div>
//         <div>touchedFields : {JSON.stringify(touchedFields)}</div>

//         <button type="submit">Login</button>
//         <button type="reset" onClick={handleReset}>
//           Reset
//         </button>
//         <button type="button" onClick={() => trigger("password")}>
//           バリデーション
//         </button>
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
//   const {
//     register,
//     handleSubmit,
//     setError,
//     getValues,
//     watch,
//     formState: { errors },
//   } = useForm<FormData>({
//     defaultValues: { email: "", password: "" },
//   });

//   // const onSubmit = handleSubmit((data) => {
//   //   try {
//   //     console.log(data);
//   //     throw new Error("エラーが発生しています。");
//   //   } catch (error: any) {
//   //     setError("email", {
//   //       type: "server",
//   //       message: error.message,
//   //     });
//   //     console.log(error.message);
//   //   }
//   // });
//   // console.log(errors.email);

//   const onSubmit = handleSubmit((data) => {
//     try {
//       throw new Error("エラーが発生しています。");
//       console.log(data);
//     } catch (error: any) {
//       setError("root.server", {
//         type: "server",
//         message: error.message,
//       });
//       console.log(error.message);
//     }
//   });

//   return (
//     <div className="App">
//       <h1>ログイン</h1>
//       <form onSubmit={onSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             {...register("email", { required: "入力が必須の項目です。" })}
//           />
//           {errors.email?.message && <div>{errors.email.message}</div>}
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             {...register("password", { required: "入力が必須の項目です。" })}
//             type="password"
//           />
//           {errors.password?.message && <div>{errors.password.message}</div>}
//         </div>
//         <div>getValues{getValues("email")}</div>
//         <div>watch{watch("email")}</div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useForm } from "react-hook-form";

type formData = {
  showAge: boolean;
  age: string;
};

const App = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const watchShowAge = watch("showAge", false);

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div>
          <input type="checkbox" {...register("showAge")} />
        </div>

        {watchShowAge && (
          <div>
            <input type="number" {...register("age", { min: 50 })} />
            {errors.age && <div>50以上を入力してください</div>}
          </div>
        )}

        <div>
          <button type="submit">送信</button>
        </div>
      </form>
    </div>
  );
};

export default App;
