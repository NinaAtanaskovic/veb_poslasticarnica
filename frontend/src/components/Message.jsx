const Message = ({ variant = 'info', children }) => {
  const variantClass = {
    info: 'message-info',
    danger: 'message-danger',
    success: 'message-success',
    warning: 'message-warning',
  };

  return (
    <div className={`message-box ${variantClass[variant] || 'message-info'}`}>
      {children}
    </div>
  );
};

export default Message;
//sluzi za prikaz statusnih poruka u PlaceOrderSkrinu