import "../App.css"

interface Props {
  showSideBar: () => void;
}

export default function Header(props: Props) {

  return (
    <>
    <div className="flex flex-row bg-gray-300 py-3">
      <button onClick={props.showSideBar} className="bg-slate-600 rounded-sm px-2 py-1 text-white ml-2">
        <i className="pi pi-bars"/>
      </button>      
    </div>
    </>
  );
}


