import MessageProvider from "./MessageProvider";
import LoginProvider from "./LoginProvider";
import CartProvider from "./CartProvider";

const GlobalProvider = ({ children }) => {
  return (
    <MessageProvider>
      <LoginProvider>
        <CartProvider>{children}</CartProvider>
      </LoginProvider>
    </MessageProvider>
  );
};

export default GlobalProvider;
