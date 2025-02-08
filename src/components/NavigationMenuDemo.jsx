/* eslint-disable react/prop-types */
"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components = [
    {
        title: "Frontend development",
        href: "/frontend",
        description:
            "Compleate frontend including react, angular in simple and easy to understandable language",
    },
    {
        title: "Backend Development",
        href: "/backend",
        description:
            "Compleate backend development including node.js and springboot",
    },
    {
        title: "Java",
        href: "/java",
        description:
            "this is a compleate java development course in which we have covered almost all topic from basic to advance level.",
    },
    {
        title: "Python",
        href: "/python",
        description: "after compleating this course you will master python in simple and easy language.",
    },
    {
        title: "Wordpress",
        href: "/wordpress",
        description: "Learn how to develope website in just 5 min and host it.",
    },
]

export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid bg-black gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mt-4 mb-2 text-lg font-medium text-black">
                                            E Learning
                                        </div>
                                        <p className="text-sm leading-tight text-gray-700 text-muted-foreground">
                                            Get the expertise with free resources in professional fields
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="About">
                                Know more about our team and our plans
                            </ListItem>
                            <ListItem href="/docs/installation" title="Contact">
                                Get in touch with us.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 bg-black p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = (props) => {
    return (
        <li>
            <a className="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                href={props.href}>
                <div className="text-sm font-medium leading-none text-gray-600 hover:text-black">{props.title}</div>
                <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                    {props.children}
                </p>
            </a>
        </li>
    )
}
ListItem.displayName = "ListItem"
