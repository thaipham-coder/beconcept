
export default function Loading() {
    return (
        <>
            {
                [Array(4).keys()].map(({ i }: any) => (
                    <div key={i} className="grid gap-10 sm:grid-cols-2">
                        <div className="group relative flex flex-col space-y-2">
                            <span
                             className="animate-pulse rounded-md border bg-muted transition-colors h-[804px] w-[452px]"
                             style={{
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: "1.5s"
                             }}
                             />
                        </div>
                    </div>
                ))
            }
        </>
    )
}
