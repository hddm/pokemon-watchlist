export default function Search(props) {
  return (
    <div>
      <label
        htmlFor="name"
        className="tw-ml-px tw-block tw-pl-4 tw-text-sm tw-font-medium tw-text-gray-700"
      >
        Search species
      </label>
      <div className="tw-mt-1">
        <input
          type="text"
          name="name"
          id="name"
          className="tw-block tw-w-full tw-rounded-full tw-border tw-border-gray-300 tw-px-4 tw-py-2 tw-shadow-sm focus:tw-border-indigo-500 focus:tw-ring-indigo-500 sm:tw-text-sm"
          onChange={props.onChangeHandler}
        />
      </div>
    </div>
  )
}
