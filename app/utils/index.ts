const collections = [
  {
    name: "aim_en",
    prefix: "/en/aim",
    lang: "en",
  },
  {
    name: "dccc_en",
    prefix: "/en",
    lang: "en",
  },
  {
    name: "aim",
    prefix: "/aim",
    lang: "dk",
  },
  {
    name: "dccc",
    prefix: "",
    lang: "dk",
  }
];
type NavigationItem = {
  title: string,
  path: string,
  children?: NavigationItem[],
}

export const getCollection = (path: string) => {
  for (const {name, prefix, lang} of collections) {
    const regex = new RegExp(`${prefix}(/[-a-zA-Z0-9%_\\~]*)?`);
    const result = regex.exec(path);
    if (result) {
      return {name, prefix, lang, first: result[0]};
    }
  }
  // Handle collection not found
  return {name: '', prefix: '', lang: '', first: ''};
}
export const makeNavLogic = (navi: NavigationItem[]): NavigationItem[] => {
  return navi.map(nav => {
    if (hasChildren(nav) && nav.children[0]) {
      const first: NavigationItem = nav.children[0];
      const children = makeNavLogic(nav.children.slice(1));
      return {...first, children};
    } else {
      return nav;
    }
  })
}
function hasChildren<T extends {children?: T[]}>(nav: T): nav is (T & {children: Array<T>}) {
  return "children" in nav && nav.children !== undefined && nav.children.length > 0;  
} 
