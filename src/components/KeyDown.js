const vocales = ['a','e','i','o','u']
  const handle = (e) => {
    if(vocales.includes(e.key)){
      e.preventDefault()
      
    }
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input type="text" onKeyDown={handle} />
    </div>
  );
