import React from 'react'


const Recommended = () => {
  return (
   <>
<div class="dropdown me-5" style={{float:"right"}}>
  <a class="border border-0 dropdown-toggle text-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Recommended
  </a>
     <ul class="dropdown-menu dropdown-menu-light">
     <li><a class="dropdown-item fw-bold" href="#">Recommended</a></li>

        <li><a class="dropdown-item " href="#">Newest First </a></li>
        <li><a class="dropdown-item" href="#">Popular</a></li>
        <li><a class="dropdown-item" href="#">Price: Price High to Low</a></li>
        <li><a class="dropdown-item" href="#">Price: Price Low to High</a></li>
    </ul>
</div>
   </>
  )
}

export default Recommended