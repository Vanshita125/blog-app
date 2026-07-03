import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller, useForm} from 'react-hook-form'
export default function RTE ({name,control,label,defaultValue=""}) {
  return (
    <div>
     {label && <label htmlFor={name}>{label}</label>}
     <Controller
     name={name||"content"}
     control={control}
     render={({field:{onChange}})=>(
        <Editor
        apiKey='4ggf3333usgn0aecl3767h0v60bhxjd08b3k2fr9x8wsq3ul'
        initialValue={defaultValue}
        init ={{
        height:500,
        menubar:false,
        plugins:'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount',
        toolbar:'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
        }}
        onEditorChange={onChange}
        />
     )}
     />
    </div>
  )
}
