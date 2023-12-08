import { MouseEventHandler, useCallback, useState } from "react";
import moment from "moment";
interface Props {
    orderId: number;
    paymentId: number;
    tableId: number;
    time: number;
    orderStatus: string;
    paymentStatus: string;
}

function TableOrder({ data }: { data: Props[] }) {
    // Const and func for sort
    type Data = typeof data;

    type SortKeys = keyof Data[0];

    type SortOrder = "ascn" | "desc";

    function sortData({
        tableData,
        sortKey,
        reverse,
    }: {
        tableData: Data;
        sortKey: SortKeys;
        reverse: boolean;
    }) {
        if (!sortKey) return tableData;

        const sortedData = data.sort((a, b) => {
            return a[sortKey] > b[sortKey] ? 1 : -1;
        });

        if (reverse) {
            return sortedData.reverse();
        }

        return sortedData;
    }

    function SortButton({
        sortOrder,
        columnKey,
        sortKey,
        onClick,
    }: {
        sortOrder: SortOrder;
        columnKey: SortKeys;
        sortKey: SortKeys;
        onClick: MouseEventHandler<HTMLButtonElement>;
    }) {
        return (
            <button
                onClick={onClick}
                className={`${
                    sortKey === columnKey && sortOrder === "desc"
                        ? "sort-button sort-reverse"
                        : "sort-button"
                }`}
            >
                <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                </svg>
            </button>
        );
    }
    const [sortKey, setSortKey] = useState<SortKeys>("orderId");
    const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

    const sortedData = useCallback(
        () =>
            sortData({
                tableData: data,
                sortKey,
                reverse: sortOrder === "desc",
            }),
        [data, sortKey, sortOrder],
    );

    function changeSort(key: SortKeys) {
        setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

        setSortKey(key);
    }

    //Const and func for search
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredRecords = sortedData().filter((order) =>
        Object.values(order).some((value: any) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase()),
        ),
    );
    console.log(filteredRecords);
    //Const and func for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 11;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const npage = Math.ceil(filteredRecords.length / recordsPerPage);
    const numbers: number[] = [...Array(npage + 1).keys()].slice(1);

    function prePage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    function nextPage() {
        if (currentPage < npage) {
            setCurrentPage(currentPage + 1);
        }
    }

    // Const for "showing x to x of x entries"
    function startNumber() {
        if (filteredRecords.length != 0) {
            return firstIndex + 1;
        } else {
            return 0;
        }
    }
    function endNumber() {
        if (
            currentPage == npage &&
            filteredRecords.length % recordsPerPage != 0
        ) {
            return (filteredRecords.length % recordsPerPage) + firstIndex;
        } else {
            if (filteredRecords.length != 0) {
                return recordsPerPage + firstIndex;
            } else {
                return 0;
            }
        }
    }

    return (
        <div className="mx-12">
            <div className="w-3/4 my-4">
                <form>
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
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
                                width: "329.6px",
                                height: "41.6px",
                                borderTopWidth: "1px",
                                borderBottomWidth: "1px",
                                borderRightWidth: "1px",
                                borderLeftWidth: "1px",
                            }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                }
                            }}
                        />
                    </div>
                </form>
            </div>
            <div className="font-nunito relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
                <table className="w-full text-xs text-left rtl:text-right">
                    <thead className="text-xs text-mealshub-golden bg-mealshub-blue">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                                No
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                                Order Id
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                                Unique Code
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                                Table Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center font-semibold">
                                    Order Time
                                    <SortButton
                                        columnKey={"time"}
                                        onClick={() => changeSort("time")}
                                        {...{
                                            sortOrder,
                                            sortKey,
                                        }}
                                    />
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center font-semibold">
                                    Order Status
                                    <SortButton
                                        columnKey={"orderStatus"}
                                        onClick={() =>
                                            changeSort("orderStatus")
                                        }
                                        {...{
                                            sortOrder,
                                            sortKey,
                                        }}
                                    />
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center font-semibold">
                                    Payment Status
                                    <SortButton
                                        columnKey={"paymentStatus"}
                                        onClick={() =>
                                            changeSort("paymentStatus")
                                        }
                                        {...{
                                            sortOrder,
                                            sortKey,
                                        }}
                                    />
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRecords
                            .slice(firstIndex, lastIndex)
                            .map((record, index) => {
                                const date = moment(record.time).format(
                                    "DD/MM/YYYY hh:mm:ss",
                                );
                                return (
                                    <tr
                                        className="odd:bg-white even:bg-gray-50 border-b"
                                        key={record.orderId}
                                    >
                                        <td className="px-6 py-4">
                                            {index +
                                                1 +
                                                (currentPage - 1) *
                                                    recordsPerPage}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {record.orderId}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {record.paymentId}
                                        </td>
                                        <td className="px-6 py-4 whitespace-normal">
                                            {record.tableId}
                                        </td>
                                        <td className="px-6 py-4 whitespace-normal">
                                            {date}
                                        </td>
                                        <td className="px-6 py-4 whitespace-normal">
                                            {record.orderStatus}
                                        </td>
                                        <td className="px-6 py-4 whitespace-normal">
                                            {record.paymentStatus}
                                        </td>
                                        <td className="px-6 py-4">
                                            <a
                                                href={`/tenant/orders/${record.orderId}`}
                                                className="text-mealshub-blue hover:underline"
                                            >
                                                Click for Details
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
            <div className="grid grid-cols-2 mt-4">
                <div className="justify-self-start">
                    <nav aria-label="Page Navigation">
                        <ul
                            className="pagination flex items-center  h-8 text-sm"
                            style={{
                                width: "316px",
                                height: "34px",
                            }}
                        >
                            <li className="page-item">
                                <a
                                    href="#"
                                    className="page-link flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 mr-4"
                                    onClick={prePage}
                                >
                                    <span className="sr-only">Previous</span>
                                    <svg
                                        className="w-2.5 h-2.5 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 1 1 5l4 4"
                                        />
                                    </svg>
                                </a>
                            </li>
                            {numbers.map((n, i) => (
                                <li>
                                    <a
                                        href="#"
                                        className={`page-item ${
                                            currentPage === n
                                                ? "z-10 flex items-center justify-center px-3 h-8 leading-tight text-mealshub-blue rounded-lg bg-mealshub-greenpalet hover:bg-blue-100 hover:text-blue-700 mx-1"
                                                : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 mx-1"
                                        }`}
                                        key={i}
                                        onClick={() => setCurrentPage(n)}
                                    >
                                        {n}
                                    </a>
                                </li>
                            ))}
                            <li className="page-item">
                                <a
                                    href="#"
                                    className="page-link flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 mx-4"
                                    onClick={nextPage}
                                >
                                    <span className="sr-only">Next</span>
                                    <svg
                                        className="w-2.5 h-2.5 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m1 9 4-4-4-4"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="font-nunito text-sm text-gray-700 justify-self-end mt-4">
                    Showing{" "}
                    <span className="font-semibold text-black">
                        {startNumber()}
                    </span>{" "}
                    to{" "}
                    <span className="font-semibold text-black">
                        {endNumber()}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-black">
                        {filteredRecords.length}
                    </span>{" "}
                    Entries
                </div>
            </div>
        </div>
    );
}

export default TableOrder;
