import { Badge } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import Card, { CardBody } from "@/shared/Card";
import Typography from "@/shared/Typography";
import Image from "next/image";
import React, { FC } from "react";

interface UserBadgesProps {
  badges: Badge[];
}

const UserBadges: FC<UserBadgesProps> = ({ badges }) => {
  return (
    !!badges.length && (
      <Card className="col-span-1 lg:col-span-2">
        <CardBody className="pb-8">
          <Typography variant="h2" className="mb-3">
            Badges
          </Typography>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            {badges.map(({ id, name, image, dateAssigned }) => (
              <div key={id} className="flex items-center gap-6">
                <div className="relative h-20 aspect-square">
                  <Image src={image} fill alt={name} />
                </div>
                <div>
                  <Typography variant="h4">{name}</Typography>
                  <p className="text-foreground-500">
                    Earned on {formatDate(dateAssigned)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    )
  );
};

export default UserBadges;
