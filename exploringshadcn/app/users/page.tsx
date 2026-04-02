
import BreadcrumbComponent from "@/components/web/BreadcrumbComponent"
import CardList from "@/components/Cards/CardList"

export default function UsersPage() {

    return (
        <div>
            <BreadcrumbComponent />
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                <div className="w-full xl:w-1/3 space-y-6">
                    {/* user badge */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                    </div>
                    {/* information container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                    </div>
                    {/* CartList */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Latest Transactions" />
                    </div>
                </div>

                <div className="w-full xl:w-2/3 space-y-6">
                    <div className="bg-primary-foreground p-4 rounded-lg">
                    </div>

                    <div className="bg-primary-foreground p-4 rounded-lg">
                    </div>

                </div>


            </div>
        </div>
    )
}