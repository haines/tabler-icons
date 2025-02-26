import * as React from "react";

function IconMeatOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-meat-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13.62 8.382l1.966 -1.967a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-1.82 1.821" /><ellipse transform="rotate(45 8.025 16.475)" cx={8.025} cy={16.475} rx={7} ry={3} /><path d="M7.5 16l1 1" /><path d="M12.975 21.425c1.582 -1.582 2.679 -3.407 3.242 -5.2m.383 -3.625c-.16 -1.238 -.653 -2.345 -1.504 -3.195c-.85 -.85 -1.955 -1.344 -3.192 -1.503m-3.63 .382c-1.792 .563 -3.616 1.66 -5.198 3.242" /><path d="M3 3l18 18" /></svg>;
}

export default IconMeatOff;