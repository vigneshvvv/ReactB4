function ConditionalRendering(){

    const isLoggedIn = true;
    return(<>
    
    <div>
        {/* {isLoggedIn ? <h1>Welcome to Home Page</h1> : <h1>please Login</h1>} */}
        {isLoggedIn && <h1>Welcome to home page</h1>}
    </div>
    </>);
}

export default ConditionalRendering;