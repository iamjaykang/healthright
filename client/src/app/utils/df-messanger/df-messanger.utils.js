export function shouldShowMessenger() {
    // Add the routes where you want to disable df-messenger
    const disabledRoutes = ["/admin", "/checkout"];
  
    // Get the current route from the window location
    const { pathname } = window.location;
  
    // Check if the current route is in the disabledRoutes array
    if (disabledRoutes.includes(pathname)) {
      return false;
    }
  
    return true;
  }
  