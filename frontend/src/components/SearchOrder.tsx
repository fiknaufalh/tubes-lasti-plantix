export default function SearchOrder() {
    return (
        <form>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
                Search
            </label>
            <div className="relative font-nunito">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="flex p ps-12 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-mealshub-blue focus:border-mealshub-blue"
                    placeholder="Search your orders"
                    required
                    style={{
                        width: '329.6px',
                        height: '41.6px',
                        borderTopWidth: '1px',
                        borderBottomWidth: '1px',
                        borderRightWidth: '1px',
                        borderLeftWidth: '1px',
                    }}
                />
            </div>
        </form>
    );
};    