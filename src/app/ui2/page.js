

import React from 'react'

export default function page() {
  let user = "1479193538";
  
  return (
    <div>
      {
        JSON.stringify({
          message: 'Message sent successfully',
          user
        })
      }
    </div>
  )
}
