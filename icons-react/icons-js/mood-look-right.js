import * as React from "react";

function IconMoodLookRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-look-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle transform="matrix(-1 0 0 1 24 0)" cx={12} cy={12} r={9} /><path d="M15 9h-.01" /><path d="M20 15h-4" /></svg>;
}

export default IconMoodLookRight;