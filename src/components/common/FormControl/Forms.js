import React from 'react';
import { reduxForm, Field } from 'redux-form';
import s from './Textarea.module.css';

export const FormComponent = (Tag) => ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => {
    return (
        <div>
            <Tag {...input} placeholder={label} type={type} className={s.textarea} />
            {touched && ((error && <span className={s.error} >{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    )
}

// export function Textarea ({
//       input,
//       label,
//       type,
//       meta: { touched, error, warning }
//     }) {
//     return (
//         <div>
//             <textarea {...input} placeholder={label} type={type} className={s.textarea} />
//             {touched && ((error && <span className={s.error} >{error}</span>) || (warning && <span>{warning}</span>))}
//         </div>
//     )
// }

// export function Input ({
//     input,
//     label,
//     type,
//     meta: { touched, error, warning }
//   }) {
//   return (
//       <div>
//           <input {...input} placeholder={label} type={type} className={s.login} />
//           {touched && ((error && <span className={s.error} >{error}</span>) || (warning && <span>{warning}</span>))}
//       </div>
//   )
// }