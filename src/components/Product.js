const items = [
  {
    name: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    name: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    name: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    name: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    name: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
];

export default function Product() {
  return (
    <div class="flex-box">
      <div class="box-background">
        <div class="box" />
        <div class="text-flex">
          <span class="box-text-1">
            Lorem ipsum dolor sit amet, consectetur
          </span>
          <span class="box-text-2">Lorem ipsum</span>
          <span class="box-text-3">Lorem ipsum dolor sit</span>
        </div>
      </div>
      <div class="scroller bottom-box">
        <div class="search-box flex-container">
          <input class="text-field" type="text" placeholder="Placeholder..." />
          <button class="submit" type="submit">
            SUBMIT
          </button>
        </div>
        <div>
          {items.map((item) => (
            <div>
              <div class="flex-container">
                <div >
                  <span class="dot"></span>
                </div>
                <div >
                  <p class="name">{item.name}</p>
                </div>
              </div>
              <div class="flex-container">
                <div >
                  <div class="dot-empty" />
                </div>
                <div >
                  <div class="description">{item.description}</div>
                </div>
              </div>
              <span class="line" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
