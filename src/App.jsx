import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import HomeBanner from './HomeBanner'
import PostSection from './PostSection'
 const App = () => {
  return (
    <div>
   <div style={{marginBottom:'60px'}} className='d-none d-md-block border-bottom  '>
   <Header/>
   
   </div> 
   <HomeBanner/>
   <PostSection/>
</div>
  )
}

export default App

