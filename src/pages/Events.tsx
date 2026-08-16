import { CalendarDays, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

export default function EventsPage() {
    return (
        <Layout title="Events — PageKey" description="Local Take Back Tech events to connect with builders, engineers, and curious people who want to understand and control their technology.">
            {/* Hero Section */}
            <section className="mx-auto max-w-4xl px-6 py-24 text-center">
                <Badge variant="outline" className="mb-6 bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20 px-3 py-1">
                    Community
                </Badge>
                <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl mb-6">
                    Take Back Tech
                </h1>
                
                <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground leading-relaxed">
                    Local events for people who want to understand, build, and control their technology.
                </p>
            </section>

            {/* Upcoming Events */}
            <section className="mx-auto max-w-4xl px-6 py-12">
                <h2 className="text-2xl font-bold tracking-tight mb-8">Upcoming Events</h2>
                
                <Card className="border-dashed border-2 bg-muted/10">
                    <CardContent className="flex flex-col items-center justify-center p-12 text-center text-muted-foreground">
                        <CalendarDays className="h-10 w-10 mb-4 opacity-50" />
                        <p className="text-lg font-medium text-foreground">No upcoming events scheduled right now.</p>
                        <p className="mt-2">Check back soon for new local meetups and workshops.</p>
                    </CardContent>
                </Card>
            </section>

            {/* Past Events */}
            <section className="mx-auto max-w-4xl px-6 py-12">
                <h2 className="text-2xl font-bold tracking-tight mb-8 text-muted-foreground">Past Events</h2>
                
                <Card className="bg-muted/5 border-muted">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center text-muted-foreground">
                        <p>Past event archives will appear here.</p>
                    </CardContent>
                </Card>
            </section>

            {/* Community Section */}
            <section className="border-t bg-muted/10 mt-12">
                <div className="mx-auto max-w-4xl px-6 py-24 text-center">
                    <Users className="h-12 w-12 text-orange-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold tracking-tight mb-6">Who Should Attend?</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                        Builders, engineers, entrepreneurs, self-hosters, hardware enthusiasts, AI practitioners, and curious people interested in technology. Whether you're an expert or just starting out, if you want to understand how things work under the hood, you belong here.
                    </p>
                </div>
            </section>
        </Layout>
    );
}
