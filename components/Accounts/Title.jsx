import React from 'react'

const Title = ({title, text}) => {
  return (
    <div>
      <div className="pl-4 border-l-4 border-l-red-900">
        <h1 className="leading-{40px] text-[30px] text-blue-900 font-bold">
          {title}
        </h1>
      </div>
      <p className="leading-{24px] text-[16px] text-gray-400 font-medium mt-6">
        {" "}
        {text }{" "}
      </p>


    </div>
  );
}

export default Title