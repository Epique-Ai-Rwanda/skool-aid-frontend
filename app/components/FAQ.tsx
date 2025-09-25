'use client';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";

export default function FAQ() {

    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
            <h2 className="text-[40px] font-medium text-[var(--brand-dark)] mb-10 leading-tight">
             Got a
             <span className="relative inline-block">
                <span className="absolute inset-3 mx-3 bg-orange-500 transform"></span>
                <span className="relative text-[var(--brand-dark)] px-3 py-1">
                    Question?
                </span>
            </span>
          </h2>
                    <p className="text-gray-600 text-lg">
                        We&apos;ve compiled the most frequently asked questions to provide you with
                        quick and helpful information. Feel free to reach out directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div >
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What Makes Skool-Aid different</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    Our flagship product combines cutting-edge technology with sleek
                                    design. Built with premium materials, it offers unparalleled
                                    performance and reliability.
                                </p>
                                <p>
                                    Key features include advanced processing capabilities, and an
                                    intuitive user interface designed for both beginners and experts.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>How does Skool-Aid support Teachers?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    We offer a range of resources and tools designed specifically for
                                    educators. Our platform includes lesson plans, interactive
                                    activities, and assessment tools to help teachers effectively
                                    integrate technology into their classrooms.
                                </p>
                                <p>
                                    All orders are carefully packaged and fully insured. Track your
                                    shipment in real-time through our dedicated tracking portal.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is Skool-Aid accessible in rural Areas?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    We stand behind our products with a comprehensive 30-day return
                                    policy. If you&apos;re not completely satisfied, simply return the
                                    item in its original condition.
                                </p>
                                <p>
                                    Our hassle-free return process includes free return shipping and
                                    full refunds processed within 48 hours of receiving the returned
                                    item.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div >
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What role does technology play in Skool-Aid?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    Our flagship product combines cutting-edge technology with sleek
                                    design. Built with premium materials, it offers unparalleled
                                    performance and reliability.
                                </p>
                                <p>
                                    Key features include advanced processing capabilities, and an
                                    intuitive user interface designed for both beginners and experts.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Can Skool-Aid be customized?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    We offer a range of customization options to suit the unique needs
                                    of each classroom. Educators can tailor the platform&apos;s features,
                                    content, and assessments to align with their specific curriculum
                                    goals.
                                </p>
                                <p>
                                    All orders are carefully packaged and fully insured. Track your
                                    shipment in real-time through our dedicated tracking portal.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>How does Skool-Aid align with Rwanda Education?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    We are committed to supporting the goals of Rwanda&apos;s education system
                                    by providing a platform that is adaptable to local curricula and
                                    teaching methods. Our content is designed to be culturally relevant
                                    and accessible, ensuring that all students can benefit from our
                                    resources.
                                </p>
                                <p>
                                    Our hassle-free return process includes free return shipping and
                                    full refunds processed within 48 hours of receiving the returned
                                    item.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                </div>
                <div className="text-center mt-12">
                    <h3>
                        <span className="text-left"> If you have any further questions, feel free to reach out directly!</span>
                    </h3>
                    <Button variant={'ghost'} className="mt-4 bg-[var(--brand-orange)] text-[var(--brand-white)] hover:bg-[var(--brand-orange)/90]">
                        Contact Us
                    </Button>
                </div>
            </div>
        </section>
    );
}
