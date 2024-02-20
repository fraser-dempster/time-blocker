export default function AddButton() {
  return (
    <>
      <div className="absolute bottom-10 right-5">
        <button className="bg-[#4CAF50] hover:bg-green-800 text-white py-4 px-4 rounded-full focus:outline-none focus:shadow-outline flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
