const NotificationModal = () => {
  return (
    <div>
      <div className="bg-secondary p-3.5 sm:p-5 w-full rounded-t-[20px] rounded-b-none flex items-center justify-between">
        <h1 className=" sm:text-xl font-bold !font-family-barlow text-white">
          Notifications
        </h1>
        <p className="text-white text-xs sm:text-sm cursor-pointer hover:opacity-70 transition-all duration-300">
          Clear All
        </p>
      </div>
      <div className="flex flex-col max-h-[70vh] overflow-auto">
        <NotificationContainer />
        <NotificationContainer />
        <NotificationContainer />
        <NotificationContainer />
        <NotificationContainer />
        <NotificationContainer />
        <NotificationContainer />
        <NotificationContainer />
      </div>
    </div>
  );
};

const NotificationContainer = () => {
  return (
    <div className="p-3 sm:p-5 w-full flex gap-1.5 hover:bg-primary/20 cursor-pointer transition-all duration-300 border-b border-primary-border hover:border-primary">
      <div className="relative">
        <img
          src="https://picsum.photos/200/300"
          className="h-7 w-7 rounded-full"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <h1 className="text-xs text-secondary">
          Micheal Dandi{" "}
          <span className="text-primary-text">send you a message</span>
        </h1>
        <p className="text-[10px] text-primary-text">5 mins ago</p>
      </div>
    </div>
  );
};

export default NotificationModal;
