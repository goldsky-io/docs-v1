import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { slugifyWithCounter } from "@sindresorhus/slugify";

import { Hero } from "@/components/Hero";
import { Logo, LogoWordmark } from "@/components/Logo";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Navigation } from "@/components/Navigation";
import { Prose } from "@/components/Prose";
import { Search } from "@/components/Search";
import { ThemeSelector } from "@/components/ThemeSelector";
import { HowIsIt } from "./HowIsIt";

const navigation = [
  {
    title: "Introduction",
    links: [
      { title: "Getting started", href: "/" },
      { title: "Pricing", href: "/pricing" },
      { title: "Migrate from The Graph", href: "/migrate-from-the-graph" },
      { title: "Teams and Projects", href: "/teams-and-projects" },
      { title: "Supported Chains", href: "/supported-chains" },
    ],
  },
  // {
  //   title: "Recipes",
  //   links: [
  //     { title: "Overview", href: "/recipes" },
  //     { title: "NFT transfers", href: "/recipes/nft-transfers" },
  //   ],
  // },
  {
    title: "Subgraphs",
    links: [
      { title: "Overview", href: "/subgraphs" },
      {
        title: "Deploy a subgraph",
        href: "/subgraphs/deploying-subgraphs",
      },
      {
        title: "Serverless vs dedicated",
        href: "/subgraphs/serverless-vs-dedicated",
      },
      {
        title: "Managing API endpoints with Tags",
        href: "/subgraphs/tags",
      },
      {
        title: "Create no-code subgraphs",
        href: "/subgraphs/instant-subgraphs",
      },
      { title: "Send subgraph-powered webhooks", href: "/subgraphs/webhooks" },
      {
        title: "Sync subgraphs to your datastore",
        href: "/subgraphs/subgraphs-with-mirror",
      },
    ],
  },
  {
    title: "Mirror",
    links: [
      {
        title: "Overview",
        href: "/mirror/what-are-mirror-pipelines",
      },
      {
        title: "Guide: Export blockchain events to a database",
        href: "/mirror/guide-bored-ape",
      },
      { title: "Create a pipeline", href: "/mirror/creating-a-pipeline" },
      {
        title: "Choosing the right sink",
        href: "/mirror/choosing-the-right-sink",
      },
      {
        title: "Sources",
        href: "/mirror/sources",
        links: [
          { title: "Subgraphs", href: "/mirror/sources/subgraphs" },
          { title: "Direct Indexing", href: "/mirror/sources/direct-indexing" },
          { title: "Enriched NFT Data", href: "/mirror/sources/nft-data" },
        ],
      },
      {
        title: "Sinks",
        href: "/mirror/sinks",
        links: [
          { title: "PostgreSQL", href: "/mirror/sinks/postgresql" },
          { title: "ClickHouse", href: "/mirror/sinks/clickhouse" },
          { title: "Rockset", href: "/mirror/sinks/rockset" },
          {
            title: "Elasticsearch",
            href: "/mirror/sinks/elasticsearch",
          },
          { title: "Kafka", href: "/mirror/sinks/kafka" },
          { title: "AWS S3", href: "/mirror/sinks/aws-s3" },
          { title: "Timescale", href: "/mirror/sinks/timescale" },
        ],
      },
      {
        title: "References",
        href: "/mirror/references",
        links: [
          {
            title: "Pipeline Configuration",
            href: "/mirror/references/pipeline-configuration",
          },
          {
            title: "On-chain Data Schemas",
            href: "/mirror/references/indexed-on-chain-data-schemas",
          },
        ],
      },
    ],
  },
  {
    title: "References",
    links: [
      { title: "CLI", href: "/references/cli" },
      {
        title: "Instant Subgraphs Configuration",
        href: "/references/instant-subgraphs-configuration",
      },
    ],
  },
];

function Header({ navigation }) {
  let [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8",
        isScrolled
          ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75"
          : "dark:bg-transparent",
      )}
    >
      <div className="mr-6 flex lg:hidden">
        <MobileNavigation navigation={navigation} />
      </div>
      <div className="relative flex flex-grow basis-0 items-center">
        <Link href="/" aria-label="Home page">
          <Logo className="h-9 w-9 lg:hidden" />
          <LogoWordmark className="hidden h-9 w-auto fill-slate-700 dark:fill-sky-100 lg:block" />
        </Link>
      </div>
      <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
        <Search />
      </div>
      <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
        <ThemeSelector className="relative z-10" />
      </div>
    </header>
  );
}

function useTableOfContents(tableOfContents) {
  const scrollPaddingTopPx = 80; // This comes from _document.jsx
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id);

  let getHeadings = useCallback((tableOfContents) => {
    return tableOfContents
      .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
      .map((id) => {
        let el = document.getElementById(id);
        if (!el) return;

        let style = window.getComputedStyle(el);
        let scrollMt = parseFloat(style.scrollMarginTop);

        let top =
          window.scrollY +
          el.getBoundingClientRect().top -
          scrollMt -
          scrollPaddingTopPx;
        return { id, top };
      });
  }, []);

  useEffect(() => {
    if (tableOfContents.length === 0) return;
    let headings = getHeadings(tableOfContents);
    function onScroll() {
      let top = window.scrollY;
      let current = headings[0].id;
      for (let heading of headings) {
        if (top >= heading.top) {
          current = heading.id;
        } else {
          break;
        }
      }
      setCurrentSection(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [getHeadings, tableOfContents]);

  return currentSection;
}

function flattenLinks(navigation) {
  function flatten(item) {
    const links = item.links || [];
    const nestedLinks = links.flatMap((link) => flatten(link));
    return [item.href ? item : null, ...nestedLinks].filter(Boolean);
  }
  return navigation.flatMap((item) => flatten(item));
}

export function Layout({ children, title, tableOfContents }) {
  let router = useRouter();
  let isHomePage = router.pathname === "/";
  let allLinks = flattenLinks(navigation);
  let linkIndex = allLinks.findIndex((link) => link.href === router.pathname);
  let previousPage = allLinks[linkIndex - 1];
  let nextPage = allLinks[linkIndex + 1];
  let section = navigation.find((section) =>
    section.links.find(
      (link) =>
        link.links?.find((sublink) => sublink.href === router.pathname) ||
        link.href === router.pathname,
    ),
  );
  let currentSection = useTableOfContents(tableOfContents);

  function isActive(section) {
    if (section.id === currentSection) {
      return true;
    }
    if (!section.children) {
      return false;
    }
    return section.children.findIndex(isActive) > -1;
  }

  return (
    <>
      <Header navigation={navigation} />

      {isHomePage && <Hero />}

      <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
          <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5">
            <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
            <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" />
            <Navigation
              navigation={navigation}
              className="w-64 pr-8 xl:w-72 xl:pr-16"
            />
          </div>
        </div>
        <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
          <article>
            {(title || section) && (
              <header className="mb-9 space-y-1">
                {section && (
                  <p className="font-display text-sm font-medium text-sky-500">
                    {section.title}
                  </p>
                )}
                {title && (
                  <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
                    <div id={slugifyWithCounter()(title)} />
                    {title}
                  </h1>
                )}
              </header>
            )}
            <Prose>{children}</Prose>
          </article>
          <dl className="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
            {previousPage && (
              <div>
                <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                  Previous
                </dt>
                <dd className="mt-1">
                  <Link
                    href={previousPage.href}
                    className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    <span aria-hidden="true">&larr;</span> {previousPage.title}
                  </Link>
                </dd>
              </div>
            )}
            {nextPage && (
              <div className="ml-auto text-right">
                <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                  Next
                </dt>
                <dd className="mt-1">
                  <Link
                    href={nextPage.href}
                    className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    {nextPage.title} <span aria-hidden="true">&rarr;</span>
                  </Link>
                </dd>
              </div>
            )}
          </dl>
          <HowIsIt />
        </div>
        <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
          <nav aria-labelledby="on-this-page-title" className="w-56">
            {tableOfContents.length > 0 && (
              <>
                <h2
                  id="on-this-page-title"
                  className="font-display text-sm font-medium text-slate-900 dark:text-white"
                >
                  On this page
                </h2>
                <ol role="list" className="mt-4 space-y-3 text-sm">
                  {tableOfContents.map((section) => (
                    <li key={section.id}>
                      <h3>
                        <Link
                          href={`#${section.id}`}
                          className={clsx(
                            isActive(section)
                              ? "text-sky-500"
                              : "font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300",
                          )}
                        >
                          {section.title}
                        </Link>
                      </h3>
                      {section.children.length > 0 && (
                        <ol
                          role="list"
                          className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400"
                        >
                          {section.children.map((subSection) => (
                            <li key={subSection.id}>
                              <Link
                                href={`#${subSection.id}`}
                                className={
                                  isActive(subSection)
                                    ? "text-sky-500"
                                    : "hover:text-slate-600 dark:hover:text-slate-300"
                                }
                              >
                                {subSection.title}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  ))}
                </ol>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
