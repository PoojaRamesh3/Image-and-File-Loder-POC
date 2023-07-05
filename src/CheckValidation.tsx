import React, { useState } from "react";

const CheckValidation = () => {
  const [state, setState] = useState<any>("");

  return (
    <div className="text-center">
      <div className={`bg-[#1f1463] text-white font-semibold p-2 text-sm`}>
        Project Rights Required
      </div>
      <div className="flex items-center justify-center p-5">
        <div className="text-sm">
          <label className="text-zinc-600 mx-3">Rights Strategy :</label>
        </div>
        <select
          className={`"h-8" border "min-w-[300px]"
         rounded-sm outline-none text-sm cursor-pointer text-center`}
        >
          <option value={"Select"}>Select</option>
          <option value={"Tier 1"}>Tier 1</option>
          <option value={"Tier 2"}>Tier 2</option>
          <option value={"Tier 3"}>Tier 3</option>
        </select>
      </div>
      <div className="text-sm">
        <div className="bg-gray-300 p-1 font-semibold mt-1">Rights</div>
        <div className="text-sm">
          <div className="flex space-x-2 items-centermy-1 my-2 justify-center">
            <div className="">Supporting Supplements</div>
            <input type="radio" name="supportingSupplements" />
            <input type="radio" name="supportingSupplements" />
          </div>
          <div className="flex space-x-2 items-centermy-1 my-2 justify-center">
            <div className="">Foreign Language Translations</div>
            <input type="radio" name="foreignLanguageTranslations" />
            <input type="radio" name="foreignLanguageTranslations" />
          </div>
          <div className="my-5">
            <div className="text-sm">
              <label className="text-zinc-600 mx-3">Promotional Use</label>
            </div>
            <select
              className={`"h-8" border "min-w-[300px]"
         rounded-sm outline-none text-sm cursor-pointer text-center`}
            >
              <option value={"Select"}>Select</option>
              <option value={"Rights to display in context of related person"}>
                Rights to display in context of related person
              </option>
            </select>
            <div className="text-sm mt-3">
              <label className="text-zinc-600 mx-3">Number of Editions</label>
            </div>
            <select
              className={`"h-8" border "min-w-[300px]"
         rounded-sm outline-none text-sm cursor-pointer text-center`}
            >
              <option value={"Select"}>Select</option>
              <option value={"This and Subsequent Editions"}>
                This and Subsequent Editions
              </option>
            </select>
          </div>
          <div className="flex space-x-2 items-centermy-1 my-2 justify-center">
            <div className="">Derivatives</div>
            <input type="radio" name="derivatives" />
            <input type="radio" name="derivatives" />
          </div>

          <div className="flex items-center justify-center">
            <div className="mx-5 flex">
              <input type="checkbox" />
              <div className="mx-1">Abridgements</div>
            </div>
            <div className="mx-5 flex">
              <input type="checkbox" />
              <div className="mx-1">Brief Editions</div>
            </div>
            <div className="mx-5 flex">
              <input type="checkbox" />
              <div className="mx-1">Split Editions</div>
            </div>
            <div className="mx-5 flex">
              <input type="checkbox" />
              <div className="mx-1">Adaptations </div>
            </div>
            <div className="mx-5 flex">
              <input type="checkbox" />
              <div className="mx-1">Custom Version </div>
            </div>
            <div className="mx-5 flex">
              <input type="checkbox" />
              <div className="mx-1">Versions </div>
            </div>
          </div>

          <div className="flex space-x-2 items-centermy-1 my-2 justify-center">
            <div className="">Reuse outside of original program/course</div>
            <input type="radio" name="reuseOutside" />
            <input type="radio" name="reuseOutside" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckValidation;
