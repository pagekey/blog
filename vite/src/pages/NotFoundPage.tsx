import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

export default function NotFoundPage() {
    return (
        <Layout>
            <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-6">
                <span className="text-sm font-semibold tracking-wide text-orange-600 uppercase dark:text-orange-400">
                    404 Error
                </span>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Page Not Found
                </h1>
                <p className="mt-4 text-base text-muted-foreground max-w-md">
                    Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed in the first place.
                </p>
                <div className="mt-10">
                    {/* Using React Router's Link for instant navigation */}
                    <Button className="bg-orange-600 hover:bg-orange-500 text-white transition-colors" asChild>
                        <Link to="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>
            </div>
        </Layout>
    );
}
