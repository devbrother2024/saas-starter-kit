import Image from "next/image";
import { AlertCircle, Calendar, Users } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="break-words text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            회의는 많은데, 남는 건 탭과 기억뿐
          </h2>
          <p className="mt-6 break-words text-lg leading-relaxed text-gray-600 sm:text-xl">
            회의록 정리와 공유에 시간을 쓰지만, 실행은 자주 지연되고
            누락됩니다.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="mb-4 inline-flex rounded-lg bg-red-100 p-3">
              <AlertCircle className="h-8 w-8 flex-shrink-0 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900">
              실행은 자주 지연
            </h3>
            <p className="break-words text-gray-600">
              회의록 정리와 공유에 시간을 쓰지만, 실행은 자주 지연되고
              누락됩니다.
            </p>
          </div>

          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="mb-4 inline-flex rounded-lg bg-orange-100 p-3">
              <Users className="h-8 w-8 flex-shrink-0 text-orange-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900">
              후속 조치가 흐려짐
            </h3>
            <p className="break-words text-gray-600">
              누가 무엇을 언제까지 할지 명확하지 않아 후속 조치가 흐려집니다.
            </p>
          </div>

          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="mb-4 inline-flex rounded-lg bg-yellow-100 p-3">
              <Calendar className="h-8 w-8 flex-shrink-0 text-yellow-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900">
              자동화 부족
            </h3>
            <p className="break-words text-gray-600">
              기존 솔루션은 기록에 머물러,{" "}
              <strong className="font-semibold text-gray-900">
                실행으로 연결되는 자동화
              </strong>
              가 부족했습니다.
            </p>
          </div>
        </div>

        {/* 문제 상황 이미지 */}
        <div className="mt-16">
          <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl md:h-[32rem]">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop"
              alt="분주한 회의 후 흩어진 메모와 미완료 체크리스트"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

